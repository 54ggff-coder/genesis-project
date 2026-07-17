"use client";

export default function ShareButton() {
  async function share() {
    if (navigator.share) {
      await navigator.share({
        title: "Project Genesis",
        url: window.location.href,
      });
    }
  }

  return (
    <button
      onClick={share}
      className="border rounded-xl px-4 py-2"
    >
      Share
    </button>
  );
}