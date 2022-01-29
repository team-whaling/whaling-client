export const handlePayload = (array: any) => {
  //month
  if (array.duration === 'month') array.duration = '한 달 ';
  else if (array.duration === 'week') array.duration = '일주일 ';
  else if (array.duration === 'day') array.duration = '하루 ';
  //down
  if (array.comment === 'down') array.comment = '내려갈까요';
  else if (array.comment === 'up') array.comment = '올라갈까요';
  //
  array.created_at = array.created_at.substr(0, 10);
  array.finished_at = array.finished_at.substr(0, 10);
  //
  return array;
};
