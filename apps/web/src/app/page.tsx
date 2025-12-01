"use client";
import TerminalClient from "../components/TerminalClient";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

export default function Web() {
  return (
    <TerminalClient />
  );
}
