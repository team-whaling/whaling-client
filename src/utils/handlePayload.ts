export const handlePayload = (array: any) => {
  //month
  let duration, comment, createdAt, finishedAt;
  if (array.duration === 'month') duration = '한 달 ';
  else if (array.duration === 'week') duration = '일주일 ';
  else if (array.duration === 'day') duration = '하루 ';
  //down
  if (array.comment === 'down') comment = '내려갈까요';
  else if (array.comment === 'up') comment = '올라갈까요';
  //
  createdAt = array.created_at.substr(2, 8);
  finishedAt = array.finished_at.substr(2, 8);
  //
  return { duration, comment, createdAt, finishedAt };
};
