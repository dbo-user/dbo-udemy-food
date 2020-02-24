import axios from 'axios';

// baseURL and Authorization from yelp https://www.yelp.com/developers/documentation/v3/business
// Authorization is API Key - see Manage APP link
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kohVSSp1jAwXfYlYVsMxrMXI94SLqBZMxevK6oPzGhz4i3WnfRaiNI2LVfdbzWBopd0eaK3JrLb3KiSpuyNVRUF6_ZF_9ixxgTS-wpgKzsGXqsgy4U2lqtUpdbFFXnYx'
    }
});