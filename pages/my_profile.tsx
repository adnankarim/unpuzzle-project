import Head from "next/head";
import { NextPage } from "next";
import Section from "@/components/Section";
import UserInfo from "@/components/MyProfile/UserInfo";
import AddNewJourney from "@/components/MyProfile/AddNewJourney";
import RecentAnnotations from "@/components/MyProfile/RecentAnnoations";
import RecentPuzzleJourneys from "@/components/MyProfile/RecentPuzzleJourneys";
import RecentConfusions from "@/components/MyProfile/RecentConfusions";

const profile: NextPage = () => {
  return (
    <Section>
      <Head>
        <title>My_profile</title>
        {/* <link href="/styles/myProfile.css" rel="stylesheet" /> */}
      </Head>
      {/* User info section contains name, profile settings, journey,annotations, confusions added */}
      <UserInfo />
      {/* Creating new journey section */}
      <AddNewJourney />
      {/* Recent annotaitons section */}
      <RecentAnnotations />
      {/* Recent Puzzle Journey's Section */}
      <RecentPuzzleJourneys />
      {/* Recent Confusion Section */}
      <RecentConfusions />
    </Section>
  );
};

export default profile;
