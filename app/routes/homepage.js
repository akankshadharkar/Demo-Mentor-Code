import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
          id: 1,
          title: 'Tom Dale',
          company: 'LinkedIn',
          city: 'New York',
          category: 'Principal Staff Software Engineer',
          timeslots: 3,
          image: '/assets/images/Tom-Dale.jpg',
          description: 'I’m probably best known for helping create Ember.js, the JavaScript framework for building ambitious web apps, or possibly for making bad dad jokes on Twitter.'
        },{
          id: 2,
          title: 'Akanksha Dharkar',
          company: 'LinkedIn',
          city: 'Bangalore',
          category: 'Software Development Engineer',
          timeslots: 15,
          image: '/assets/images/Akanksha-Dharkar.jpg',
          description: 'A software developer who likes to experiment and explore'
        }, {
          id: 3,
          title: 'Ankush Dharkar',
          company: 'HotStar',
          city: 'Bangalore',
          category: 'Software Development Engineer II',
          timeslots: 7,
          image: '/assets/images/Ankush-Dharkar.jpg',
          description: 'Love helping people learn coding, enjoy building web apps for humans, Full-stack engineer 👨🏽‍💻, ambitious frontend dev'
        }];
      }
});
