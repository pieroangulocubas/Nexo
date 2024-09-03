import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { SignInFlow } from "../types"
import { useState } from "react"

export const SignInCard = ({setState}:{setState:(flow:SignInFlow)=>void}) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Inicia sesión para continuar</CardTitle>
        <CardDescription>
          Usa tu correo u otro servicio para continuar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
        <Input 
            disabled={false}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Correo"
            type="email"
            required
          />
          <Input 
            disabled={false}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Contraseña"
            type="password"
            required
          />
          <Button type="submit" size="lg" disabled={false} className="w-full">Continuar</Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={()=>{}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
            Continúa con Google
          </Button>
          <Button
            disabled={false}
            onClick={()=>{}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
            Continúa con Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          ¿No tienes una cuenta? <span onClick={()=>setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">Regístrate</span>
        </p>
      </CardContent>
    </Card>
  )
}
