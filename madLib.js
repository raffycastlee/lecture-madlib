const madLib = (profession, name, activity, isHappyEnding) => { 
  // goal of the function is use all parameters to create an adlib.
  // isHappyEnding is a boolean that branches the adlib into one of two possibilities.
  let message = "";
  message += `There was a ${profession} named ${name}.\n`;
  message += `They love to ${activity}.\n`;
  if (isHappyEnding) {
    message += `They grew an extra toe in doing things that they loved to do.`;
  } else {
    message += `They broke a toe in doing things that they loved to do.`;
  }
  return message;
}

module.exports = {
  madLib
};