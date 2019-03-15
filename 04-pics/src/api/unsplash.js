import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID 0038dd6179d29ffc419c3dcffcaabe56a86130ef9e7e05e8a519dd61d99f30e6'
	}
});
