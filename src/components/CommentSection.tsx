'use client'
import React , {useState}from 'react';
import {Card,CardContent} from '../components/ui/card'
import { Input } from '../components/ui/input';
//import { Button } from './ui/button';

interface Comment {
  id: any;
  text: string;
  author: string;
}
interface CommentSectionProps{
  postID:any;

}
export default function CommentSection({postID}:CommentSectionProps){
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewComment] = useState('');
  const [authorName, setAuthorName] =useState('');
  const [editingCommentId ,setEditingCommentId]= useState <string | null> (null);

  const handleAddComment = () => {
    if (newCommentText.trim() && authorName.trim()){
      const newCommentObj : Comment ={
        id: new Date().toISOString(),
        text: newCommentText,
        author: authorName,   
      };
      setComments([...comments, newCommentObj]);
       setNewComment('');
       setAuthorName('');  
    }
  };
  const handlEditComment = (commentID: string) => {
   const commentToEdit = comments.find((comment)=> comment.id === commentID);
    if(commentToEdit){
      setAuthorName(commentToEdit.author);
      setNewComment(commentToEdit.text);
      setEditingCommentId(commentID);
    }
  };
  const handleSavedEditedComment =()=>{
    if (newCommentText.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId? {...comments, text: newCommentText, author: authorName } : comments
      );
      setComments(updatedComments);
      setAuthorName('');
      setNewComment('');
      setEditingCommentId(null); 
    }
  }
  return(
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold'>Comments</h2>
      <div className='mt-4 space-y-4 '>
        {comments.length > 0 ?(
          comments.map((comment)=>(
            <Card key={comment.id}>
              <CardContent className='p-4'>
                <div className='font-semibold'>{comment.author}</div>
                <div>{comment.text}</div>
                <button onClick={() => handlEditComment(comment.id)}
                  className='mt-2  bg-black text-white rounded-md px-3  font-semibold hover:scale-105 transition-all'>
                  Edit
                  </button>
              </CardContent>
            </Card>
          ))
        ):(
          <p className='text-slate-400 text-center'>No comments yet.</p>
        )}

      </div>
      <div className='mt-6'>
        <Input
        type='text'
        value={authorName}
        onChange={(e)=> setAuthorName(e.target.value) }
        placeholder='Your Name'
        className='w-full mb-2'/>

        <Input
        type='text'
        value={newCommentText}
        onChange={(e)=> setNewComment(e.target.value) }
        placeholder='Your Comment'
        className='w-full mb-2'/>
      
      <button onClick={editingCommentId ? handleSavedEditedComment : handleAddComment}
      className='mt-4 bg-black text-white rounded-md px-3 py-3 font-semibold hover:scale-105 transition-all'>
        {editingCommentId? 'Save' : 'Add Comment'}
        

      </button>

      </div>



    </div>
  )
}