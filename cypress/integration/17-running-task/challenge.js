/* 
  🚀 challenge #1: examine the video and try to set up task yourself
  don’t worry, if you just copy/paste stuff, you are learning this way
  too! if you feel like experimenting, try to change some details 
  about the task, or write your own
*/ 
it('resets database before opening app', () => {

  cy
    .task('resetDatabase');

  cy
    .visit('localhost:3000');
  
});

/* 
  🚀 challenge #2: there are lots of different plugins you can write.
  some code can be executed on task, other when cypress is loading config
  and other when cypress opens browser. e.g. you can make your devtools
  open automatically when running cypress. I tweeted about that here:
  https://twitter.com/filip_hric/status/1240700715854487553
*/ 

/* 
  🔥 challenge #3: if you are on fire, try to create a task that will 
  seed a database and will take json object as an argument
*/ 