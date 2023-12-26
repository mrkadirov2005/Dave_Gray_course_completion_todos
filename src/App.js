import AddPostForm from "./features/posts/AddPostFrom";
import Postlist from "./features/posts/PostsList";
import SinglePostPage from './features/posts/SinglePostPage'
import Layout from "./components/Layout";
import { Route, Routes , Navigate} from "react-router-dom";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
function App() {
  return (
 <Routes>
  <Route path='/' element={<Layout/>}>

<Route index element={<Postlist/>}/> 

<Route path="post">
<Route index element={<AddPostForm/>}/>
<Route path=":postId" element={<SinglePostPage/>}/>
<Route path='edit/:postId' element={<EditPostForm/>}/>


</Route>

<Route path="user">
  <Route index element={<UsersList/>}/>
  <Route path=":userId" element={<UserPage/>}/>
</Route>


{/* catch all-replace with 404 component if you want */}
<Route path='*' element={<Navigate to='/' replace/>}/>
  </Route>
 </Routes>
  );
}

export default App;
