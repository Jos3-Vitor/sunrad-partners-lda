import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

type Fields = Record<string, string | string[]>;
type Files = Record<string, File | File[]>;

// Interface customizada para o arquivo, incluindo as propriedades que vamos usar
interface MyFile extends File {
  originalFilename?: string; // para compatibilidade, pode estar presente
  newFilename?: string;
  filepath: string; // caminho para o arquivo temporário
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const form = new formidable.IncomingForm({ maxFileSize: 5 * 1024 * 1024 });

  form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
    if (err) {
      console.error("Erro ao processar form:", err);
      return res.status(500).json({ error: "Erro ao processar envio" });
    }

    const name = fields.name?.toString() || "";
    const email = fields.email?.toString() || "";
    const message = fields.message?.toString() || "";

    // validação simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length < 2 || !emailRegex.test(email) || !message || message.length < 10) {
      return res.status(400).json({ error: "Campos inválidos" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Contato via site: ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br>")}</p><p>Enviado por: ${name} (${email})</p>`,
    };

    const file = files.file as MyFile | undefined;
    if (file && (file.originalFilename || file.newFilename) && file.filepath) {
      const filename = file.originalFilename ?? file.newFilename ?? "file";

      const allowedExtensions = [".pdf", ".doc", ".docx", ".jpg", ".png"];
      const ext = path.extname(filename).toLowerCase();

      if (!allowedExtensions.includes(ext)) {
        return res.status(400).json({ error: "Tipo de arquivo não permitido." });
      }

      mailOptions.attachments = [
        {
          filename,
          content: fs.createReadStream(file.filepath),
        },
      ];
    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (e) {
      console.error("Erro ao enviar email:", e);
      return res.status(500).json({ error: "Erro ao enviar email" });
    }
  });
}
