// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../store';
// import { addComment as addCommentAPI } from '../services/photoService';

// interface Comment {
//   id: string;
//   text: string;
// }

// interface CommentState {
//   comments: Comment[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: CommentState = {
//   comments: [],
//   status: 'idle',
//   error: null,
// };

// interface AddCommentPayload {
//   photoId: string;
//   comment: string;
// }

// export const addComment = createAsyncThunk(
//   'comment/addComment',
//   async (payload: AddCommentPayload) => {
//     const response = await addCommentAPI(payload.photoId, payload.comment);
//     return response.data;
//   }
// );

// const commentSlice = createSlice({
//   name: 'comment',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addComment.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(addComment.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.comments.push(action.payload);
//       })
//       .addCase(addComment.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message ?? 'Failed to add comment';
//       });
//   },
// });

// export const selectComments = (state: RootState) => state.comment.comments;

// export default commentSlice.reducer;

export default {};