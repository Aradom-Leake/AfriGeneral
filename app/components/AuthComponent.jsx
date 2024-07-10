// 'use client';

// import { useSession, signIn, signOut } from "next-auth/react";
// import Link from "next/link";

// const AuthComponent = () => {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <span>Loading...</span>;
//   }

//   if (session) {
//     return (
//       <>
//         <span>{session.user.name}</span>
//         <button onClick={() => signOut({ callbackUrl: '/' })}>
        
//         </button>
//       </>
//     );
//   }

//   return (
//     <button onClick={() => signIn(undefined, { callbackUrl: "/" })}>
    
//     </button>
//   );
// };

// export default AuthComponent;