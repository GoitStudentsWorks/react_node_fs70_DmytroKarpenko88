import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',

  async (credentials, thunkAPI) => {
    const { categoryName, search } = credentials;

    try {
      const { data } = await axios.get(
        `/api/notices/filter/${categoryName}?search=${search}`
      );
      // console.log(" fetchNoticesData:",  data)

      // console.log('data:', data);

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/fetchOne',
  async (noticeId, thunkAPI) => {
    try {
      // const params = query ? `?${queryString.stringify({ query })}` : '';
      const { data } = await axios.get(`/api/notices/${noticeId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (fields, thunkAPI) => {
    // console.log('fields:', fields);
    try {
      const { data } = await axios.post('/api/notices', fields);
      console.log('addNoticeData:', data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notices/${_id}`);
      console.log('_id:', _id);

      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterNotice = createAsyncThunk(
  'notices/filterNotice',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/notices/filter/${category}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentNotices = createAsyncThunk(
  'notices/userCurrentNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/users/current/notices');
      // console.log('dataCurrentNotices:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserCurrentNotices = createAsyncThunk(
  'notices/deleteUserCurrentNotices',
  async (noticeId, thunkAPI) => {
    try {
      await axios.delete(`/api/users/current/notices/${noticeId}`);

      return noticeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserCurrentFavorite = createAsyncThunk(
  'notices/addUserCurrentFavorite',
  async (noticeId, thunkAPI) => {
    // console.log('noticeId:', noticeId);
    try {
      const { data } = await axios.patch(
        `/api/users/current/favorites/${noticeId}`
      );
      // console.log('addUserCurrentFavorite:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentFavorite = createAsyncThunk(
  'notices/getUserCurrentFavorite',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/users/current/favorites`);
      // console.log('data favorite', data);
      return data;
    } catch (error) {
      console.log('error:', error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addFavoriteNotice = createAsyncThunk(
//   'notices/addFavoriteNotice',
//   async (notice, { rejectWithValue }) => {
//     console.log('notice:', notice);
//     try {
//       const { data } = await axios.patch(`/api/notices/favorite/${notice}`);

//       console.log('data:', data);
//       return data.result.updatedNotice;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const removeFavoriteNotice = createAsyncThunk(
//   'notices/removeFavoriteNotice',
//   async (petId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/api/notices/favorite/${petId}`);
//       console.log(data);
//       return data.result.updatedNotice;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
