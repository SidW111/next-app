"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState<String>();
  const [password, setPassword] = useState<String>();
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <input 
        className="border border-white p-2 rounded"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
        className="border border-white p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button
        className="border border-white px-6 py-2 rounded-full"
          onClick={async () => {
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
            router.push("/signin");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
