// http://diveinto.html5doctor.com/detect.html#video-formats

// https://modernizr.com/docs

// Detects support for the video element, as well as testing what types of content it supports.

// Subproperties are provided to describe support for ogg, h264 and webm formats, e.g.:

// Modernizr.video         // true
// Modernizr.video.ogg     // 'probably'

//	Check for H.264 Baseline video and AAC LC audio in an MPEG-4 container.
function supports_h264_baseline_video() {
  if (!Modernizr.video) { return false; }
  var v = document.createElement("video");
  return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
}

//	Check for Theora video and Vorbis audio in an Ogg container.
function supports_ogg_theora_video() {
  if (!supports_video()) { return false; }
  var v = document.createElement("video");
  return v.canPlayType('video/ogg; codecs="theora, vorbis"');
}

// Convert the two videos provided in the assignment4_videos zip file under Project Files into the
// appropriate formats to play in all current major browsers.

// Create a custom-styled video player where the videos will play, and that styling must include at
// least two (2) CSS3 features. You can use jQuery or JavaScript to build your own player, or you can
// use a jQuery plugin player that can be customized.

// Create your home page based on your comp from a previous assignment -- this is the page that will
// house your videos. You can place these videos anywhere on the page you like, but the videos should
// be under a heading called "Featured Lab". (The videos are from GIT's Technical Imaging Lab.) You
// can display the videos as part of a gallery or as two separate videos; it's up to you.

// GRAD student requirement: You will incorporate at least one of the jQuery UI features to your home
// page. For example, you could incorporate it into the way the lab videos are displayed, or you could
// have other content that you write or images that you find that are displayed in some way using a
// jQuery UI feature. Failure of a grad student not including this part will result in an automatic
// 12-point deduction.

// Optional for the assignment (these are not required but will be looked upon favorably when grading):

// You are welcome to add audio to the videos; however, the audio should be appropriate for the subject
// matter and the audience.
// You are welcome to add more content to the home page. Again, the content should be appropriate for
// the subject matter and audience.
// You are welcome to add captions (which are provided in the captions.txt file in the Project Files
// zip) at appropriate timings within the videos.
// Undergrads only: You can do Requirement #4 above that is for grad students, which is to incorporate
// a jQuery UI feature into your home page. If you choose to do this one, you will earn FULL "more than
// minimum requirements" points.