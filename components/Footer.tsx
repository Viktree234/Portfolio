"use client";

export default function Footer() {
  return (
    <footer>
      <p>
        © <span id="year">{new Date().getFullYear()}</span> Tobokebi Victory
      </p>
    </footer>
  );
}
