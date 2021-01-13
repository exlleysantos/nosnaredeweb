import axios from 'axios';
import { getToken } from './auth';

const Api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

Api.interceptors.request.use((config) => {
	const token = getToken();

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export const GET = async (url, config) => await Api.get(url, { ...config });

export const POST = async (url, data, config) => await Api.post(url, data, { ...config });

export const PUT = async (url, data, config) => await Api.put(url, data, { ...config });

export const PATCH = async (url, data, config) => await Api.patch(url, data, { ...config });

export const DELETE = async (url, config) => await Api.delete(url, { ...config });

