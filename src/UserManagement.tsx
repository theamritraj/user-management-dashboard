// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { BsFillPersonPlusFill, BsPencilFill, BsTrashFill } from "react-icons/bs";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// function UserManagement() {
//   const { register, handleSubmit, reset } = useForm<User>();
//   const [users, setUsers] = useState<User[]>([]);
//   const [editUserId, setEditUserId] = useState<number | null>(null);

//   const onSubmit = (data: User) => {
//     if (editUserId !== null) {
//       setUsers(users.map(user => (user.id === editUserId ? { ...user, ...data } : user)));
//       setEditUserId(null);
//     } else {
//       setUsers([...users, { id: Date.now(), ...data }]);
//     }
//     reset();
//   };

//   const handleEdit = (user: User) => {
//     reset(user);
//     setEditUserId(user.id);
//   };

//   const handleDelete = (id: number) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <main className="main-container">
//       <h3>User Management</h3>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 mb-4">
//         <input {...register("name", { required: true })} placeholder="Name" className="border p-2 rounded" />
//         <input {...register("email", { required: true })} placeholder="Email" className="border p-2 rounded" />
//         <Button type="submit">{editUserId ? "Update" : "Add"}</Button>
//       </form>
      
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {users.map(user => (
//             <TableRow key={user.id}>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>
//                 <Button variant="outline" onClick={() => handleEdit(user)}><BsPencilFill /></Button>
//                 <Button variant="destructive" onClick={() => handleDelete(user.id)}><BsTrashFill /></Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </main>
//   );
// }

// export default UserManagement;
