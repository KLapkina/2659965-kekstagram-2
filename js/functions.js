const parseTime = (stringTime) => stringTime.split(':').map(Number);
const timeToMinutes = (stringTime) => {
  const parsedString = parseTime(stringTime);
  return parsedString[0] * 60 + parsedString[1];
};

const isMeetingWithInWorkday = (
  beginWorkDay,
  endWorkDay,
  beginMeeting,
  countMinutes,
) => {
  const workBegin = timeToMinutes(beginWorkDay);
  const workEnd = timeToMinutes(endWorkDay);
  const meetBegin = timeToMinutes(beginMeeting);
  const meetEnd = meetBegin + countMinutes;
  if (meetBegin >= workBegin && meetEnd <= workEnd) {
    return true;
  }
  return false;
};

export { isMeetingWithInWorkday };
