import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kohVSSp1jAwXfYlYVsMxrMXI94SLqBZMxevK6oPzGhz4i3WnfRaiNI2LVfdbzWBopd0eaK3JrLb3KiSpuyNVRUF6_ZF_9ixxgTS-wpgKzsGXqsgy4U2lqtUpdbFFXnYx'
    }
});