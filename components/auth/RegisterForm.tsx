return (
  <form onSubmit={handleSubmit} className="space-y-4">
    <h2 className="text-3xl font-bold mb-6">Create Account</h2>
    <input className="w-full border rounded-xl p-3"
           placeholder="Email" type="email"
           onChange={(e) => setEmail(e.target.value)} />
    <input className="w-full border rounded-xl p-3"
           placeholder="Password" type="password"
           onChange={(e) => setPassword(e.target.value)} />
    <button type="submit"
            className="bg-black text-white w-full rounded-xl p-3">
      Create Account
    </button>
  </form>
);
