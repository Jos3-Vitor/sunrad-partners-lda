"use client";

import { useState, useEffect } from "react";
import HeaderGeral from "@/components/HeaderGeral";
import Footer from "@/components/Footer";
export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2)
      errs.push("O nome deve ter ao menos 2 caracteres.");
    if (!emailRegex.test(email)) errs.push("Email inválido.");
    if (!message || message.length < 10)
      errs.push("A mensagem deve conter no mínimo 10 caracteres.");
    if (message.length > 1000)
      errs.push("Mensagem muito longa (máximo de 1000 caracteres).");
    if (file && file.size > 5 * 1024 * 1024)
      errs.push("Arquivo muito grande. Tamanho máximo: 5MB.");

    return errs;
  };

  // Validação automática para desabilitar botão
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(validate().length === 0);
  }, [name, email, message, file]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors([]);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setFile(null);
      } else {
        const data = await res.json();
        setServerError(data.error || "Erro ao enviar. Tente novamente.");
        setSuccess(false);
      }
    } catch {
      setServerError("Erro na conexão. Tente novamente.");
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeaderGeral />
      <main className="min-h-screen pt-28 px-6 bg-gradient-to-br from-white via-blue-50 to-white text-black">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md border border-blue-100 p-10 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-center text-blue-800 mb-8 max-w-md mx-auto">
            Tem alguma dúvida ou deseja trabalhar conosco? Envie sua mensagem e
            responderemos em breve.
          </p>

          {errors.length > 0 && (
            <ul
              className="mb-4 text-red-500 space-y-1"
              aria-live="assertive"
              role="alert"
            >
              {errors.map((err, i) => (
                <li key={i}>• {err}</li>
              ))}
            </ul>
          )}

          {serverError && (
            <p
              className="mb-4 text-red-600 font-medium"
              aria-live="assertive"
              role="alert"
            >
              ❌ {serverError}
            </p>
          )}

          {success && (
            <p
              className="mb-4 text-green-600 font-medium"
              aria-live="polite"
              role="status"
            >
              ✅ Mensagem enviada com sucesso!
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-blue-900 font-medium mb-1"
              >
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ex: João da Silva"
                className="w-full p-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-blue-900 font-medium mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                className="w-full p-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-blue-900 font-medium mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                placeholder="Digite sua mensagem..."
                className="w-full p-3 rounded-lg bg-white border border-blue-200 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                required
                minLength={10}
              />
            </div>

            <div>
              <label
                htmlFor="file-upload"
                className="block text-blue-900 font-medium mb-2"
              >
                Anexar arquivo (opcional)
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="w-full text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-800 file:text-white hover:file:bg-blue-700 transition"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                isSubmitting || !isValid
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
