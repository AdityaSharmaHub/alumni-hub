"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { toast } from "sonner"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const apiUrl = process.env.API_URL;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/api/user/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/profile");
      toast.success("Account created successfully!")
    } catch (error) {
      if (error instanceof Error) {
         
        setError(error.message);
      } else if (typeof error === 'object' && error !== null && 'response' in error) {
        
        const axiosError = error as { response?: { data?: { error?: string } } };
        setError(axiosError.response?.data?.error || 'Login failed');
      } else {
         
        setError('Login failed');
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup to Virasat</CardTitle>
          <CardDescription>
            Let&apos; start this beautiful journey
          </CardDescription>
          <div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
              {/* <Button variant="outline" className="w-full">
                Signup with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
