export interface IAnnoucement {
  title: string;
  announcement_body: string;
  post_date: Date;
}

export const announcements: IAnnoucement[] = [
  {
    title: "School begins next tuesday.",
    announcement_body:
      "School begins next tuesday. Students are resuming to school tomorrow, after a long awaited break. ",
    post_date: new Date(),
  },
  {
    title: "Upcoming Science Fair - Register Now!",
    announcement_body:
      "We're excited to announce the upcoming Science Fair! Students interested in showcasing their scientific prowess and innovative ideas can register starting from today until the end of this week. The Science Fair will take place on the last Friday of this month. Don't miss this opportunity to amaze everyone with your projects!",
    post_date: new Date(),
  },
  {
    title: "Volunteer Day at the Local Animal Shelter",
    announcement_body:
      "We're organizing a volunteer day at the local animal shelter this Saturday! Students who love animals and want to make a positive impact on their lives are invited to join us. We'll be spending the day helping with various tasks, such as walking dogs, cleaning kennels, and playing with the shelter's furry residents. Don't forget to wear comfortable clothes and bring your enthusiaWe're organizing a volunteer day at the local animal shelter this Saturday! Students who love animals and want to make a positive impact on their lives are invited to join us. We'll be spending the day helping with various tasks, such as walking dogs, cleaning kennels, and playing with the shelter's furry residents. Don't forget to wear comfortable clothes and bring your enthusiasm!sm!",
    post_date: new Date(),
  },
];
