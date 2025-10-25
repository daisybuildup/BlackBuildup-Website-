"use client";
import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(
        "https://gmail.us3.list-manage.com/subscribe/post-json?u=558e5aa4e3e4d9bc7bdf3c469&id=bc8ad8149f&c=?",
        {
          method: "POST",
          mode: "no-cors",
          body: new URLSearchParams({ EMAIL: email }),
        }
      );

      setStatus("success");
      setMessage("🎉 Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("❌ Something went wrong. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md mx-auto p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-bold">Subscribe</h2>

      <input
        type="email"
        name="EMAIL"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#AD8E63] text-white px-4 py-2 rounded hover:bg-[#a57d45] disabled:opacity-50"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>

      {status !== "idle" && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
