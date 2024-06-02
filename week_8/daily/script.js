// class declaration
class Video {
  // constructor
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.title = time;
  }

  // method / function
  watch() {
    return `${this.title} watched all ${this.uploader} of ${this.title}!`;
  }
}

// instantiate the class
const runvideo = new Video("Run", "Forest", "Run");
console.log(runvideo.watch());

// instantiate the class for the second time
const runvideo2 = new Video("Mama", "Mia", "Here we go again");
console.log(runvideo2.watch());

// array of objects
const Array = [
  { title: "Run", uploader: "Forest", time: "Run" },
  { title: "Mama", uploader: "Mia", time: "Here we go again" },
  { title: "Run", uploader: "Forest", time: "Run" },
  { title: "Mama", uploader: "Mia", time: "Here we go again" },
  { title: "Run", uploader: "Forest", time: "Run" },
];

const videoArray = [];

// loop through the array of objects
Array.forEach((video) => {
  const { title, uploader, time } = video;
  videoArray.push(new Video(title, uploader, time));
});

// loop through the array of objects and call the watch method
videoArray.forEach((video) => {
  console.log(video.watch());
});


// normal for loop
for (let i = 0; i < Array.length; i++) {
  const { title, uploader, time } = Array[i];
  videoArray.push(new Video(title, uploader, time));
}

// normal for loop and call the watch method
for (let i = 0; i < videoArray.length; i++) {
  console.log(videoArray[i].watch());
}

// array of objects
const Array2 = [
    new Video("Run", "Forest", "Run"),
    new Video("Mama", "Mia", "Here we go again"),
    new Video("Run", "Forest", "Run"),
    new Video("Mama", "Mia", "Here we go again"),
    new Video("Run", "Forest", "Run"),
];

console.log(Array2); // Video { title: 'Run', uploader: 'Forest', title: 'Run' }

// loop through the array of objects and call the watch method
Array2.forEach((video) => {
  console.log(video.watch());
});

// normal for loop and call the watch method
for ( let i = 0; i < Array2.length; i++) {
    console.log(Array2[i].watch());
}
