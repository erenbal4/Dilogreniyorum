export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">Giriş / Kayıt</h2>
      <form className="flex flex-col space-y-2 mt-4">
        <input type="text" placeholder="İsim" className="border p-2"/>
        <input type="text" placeholder="Soyisim" className="border p-2"/>
        <input type="text" placeholder="Nickname" className="border p-2"/>
        <input type="email" placeholder="Mail" className="border p-2"/>
        <input type="password" placeholder="Şifre" className="border p-2"/>
        <button className="bg-blue-500 text-white p-2 rounded">Başla</button>
      </form>
    </div>
  );
}
