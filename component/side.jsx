import React from "react";




// import img
import leftbanner1 from "../../public/img/mini_weekly_rank.webp";
import leftbanner2 from "../../public/img/kaitori_left.webp";
import leftbanner3 from "../../public/img/mini_campaign.webp";
import leftbanner4 from "../../public/img/mini_line.webp";
import leftbanner5 from "../../public/img/mini_web_member.webp";
import leftbanner6 from "../../public/img/mini_recruit_400_160.webp";
import leftbannerdummy from "../../public/img/mini_web_member.webp";




const photoin = [
    {id: 0, leftbanner: leftbanner1, alt: "週間ランキング"},
    {id: 1, leftbanner: leftbanner2, alt: "買取強化キャンペーン"},
    {id: 2, leftbanner: leftbanner3, alt: "開催中のキャンペーン"},
    {id: 3, leftbanner: leftbanner4, alt: "公式LINE"},
    {id: 4, leftbanner: leftbanner5, alt: "会員募集中"},
    {id: 5, leftbanner: leftbanner6, alt: "スタッフ大募集"},
    {id: 6, leftbanner: leftbannerdummy, alt: "dummy"},
    {id: 7, leftbanner: leftbannerdummy, alt: "dummy"}
];

function Side({leftbanner,alt}){
    return(
        <>
        <div className="leftbandiv">
        <img className="leftbanner" src={leftbanner} alt={alt} />
        </div>
        </>
    )
}

function Leftcate(){
    return(
        <>
        <div className="left_categ">
            {photoin.map(photoin =>(
            <Side 
            key={photoin.id}
            leftbanner={photoin.leftbanner}
            alt={photoin.alt}
            />
            ))}
        </div>
        </>
    )
}






export default Leftcate




// 参考にする

// function Profile({name,bounty,nickname}){
//     <>
//     <section className="Profile">
//         <h2>{name}</h2>
//         <ul>
//             <li>懸賞金:{bounty}ベリ ー</li>
//             <li>二つ名:{nickname}</li>
//         </ul>
//     </section>
//     </>
// }


// const characters = [
//     { id:0, name: "ルフィ", bounty: "30億", nickname: "麦わらのルフィ" ,affiliation:"麦わら海賊団"},
//     { id:1, name: "ゾロ", bounty: "11億1100万", nickname: "海賊狩りのゾロ", affiliation:"麦わら海賊団" },
//     { id:2, name: "サンジ", bounty: "11億1100万", nickname: "黒足のサンジ",affiliation:"麦わら海賊団" },
//     { id:3, name: "マーシャル・Ｄ・ティーチ", bounty: "22億4760万", nickname: "黒ひげ", affiliation:"黒ひげ海賊団" },
//     { id:3, name: "ジーザス・バージェス", bounty: "0", nickname: "チャンピオン", affiliation:"黒ひげ海賊団" },
//    ];<q></q>





// function Gallery(){
    
//     return(
//         <>
//         <h1>ワンピースの登場人物</h1>
//         {characters.map(characters =>(
//             <Profile
//             key={characters.id}
//             name={characters.name}
//             bounty={characters.bounty}
//             nickname={characters.nickname}
//             />
//         ))
//         }
//         </>
//     )
// }