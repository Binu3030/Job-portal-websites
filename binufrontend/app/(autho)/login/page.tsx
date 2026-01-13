// "use client"


// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// export function Login() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle>Login to your account</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//         <CardAction>
//           <Button variant="link">Sign Up</Button>
//         </CardAction>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="flex flex-col gap-6">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <a
//                   href="#"
//                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex-col gap-2">
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         <Button variant="outline" className="w-full">
//           Login with Google
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }


// export default Login











'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Required'),
});


 const Login = () => {
  const router = useRouter()
  const  handleLogin = async (values)=>{
    try{
      const {data} = await axios.post('https://fakestoreapi.com/auth/login', values)
      if(data.token){
        router.push('/')
      }
    }catch(err){
      toast(err.response?.data  )
    }


  }
return (
  <div>
  <h1>Signup</h1>
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      handleLogin(values)
    }}
  >
    {({ errors, touched }) => (
      <Form className='flex flex-col gap-4'>
        <Field name="username" placeholder="username" className="bg-red-200 p-4"/>
        {errors.username && touched.username ? (
          <div>{errors.username}</div>
        ) : null}

        <Field name="password"  placeholder="password" type="password"  className="bg-red-200 p-4"/>
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
</div>
)
}

export default Login 
