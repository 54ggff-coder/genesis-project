"use client";

export default function ScrollToTop() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full"
    >
      ↑
    </button>
  );
}