import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from 'next/head';

const Profile = () => {
    const followerList = [{nickname: '박경빈'}, {nickname: '김수성'}, {nickname: '정종민'}];
    const followingList = [{nickname: '박경빈'}, {nickname: '김수성'}, {nickname: '정종민'}];

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>내 프로필 | Nodebird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉목록" data={followingList} />
                <FollowList header="팔로워목록" data={followerList} />
            </AppLayout>
        </div>
    )
};

export default Profile;