import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1920px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    addresses: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup",
  },
  {
    id: "m2",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1920px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    addresses: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
