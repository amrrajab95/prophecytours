import React from "react";
import classes from "./About.module.css"
import AboutItems from "./AboutItems";
import Page from "../Page/PageNoContainer";
import Button from "../UI/Button/Button";
import Contact from "./Contact";
const About = (props) => {

    const data = [{title: "About our Christian Travel company", content: '<p dir="ltr"><span style="background-color:transparent; color:rgb(55, 55, 55); font-family:helvetica neue,sans-serif; font-size:12pt">Prophecy Tours &amp; Travel is a Christian full-service company specializing in pilgrimage tours to the holy land with experienced Christians generation who are struggling for their living by seeking Bright and thriving future. Traveling with Prophecy Tours &amp; Travel is educational, Exciting and life changing tour with unforgettable experience.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(55, 55, 55); font-family:helvetica neue,sans-serif; font-size:12pt">Generally, these individuals are professional like clergy, educators or leader within a social, or community organization who organize a group.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(55, 55, 55); font-family:helvetica neue,sans-serif; font-size:12pt">Prophecy Tours &amp; Travel will make your air reservations, accommodation, and arranging the motor coach with providing Christian professional guides who are very knowledgeable in the bible.</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="color:rgb(0, 0, 0); font-family:quattrocento sans,sans-serif; font-size:15pt">&nbsp;</span><span style="color:rgb(0, 0, 0); font-family:pristina; font-size:16pt">This is he of whom it is written, &ldquo;&lsquo;Behold, I send my messenger before your face, who will prepare your way before you.&rsquo;</span><span style="color:rgb(0, 0, 0); font-family:quattrocento sans,sans-serif; font-size:15pt"> </span><em>- Luke 7:27</em></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(55, 55, 55); font-family:helvetica neue,sans-serif; font-size:12pt">It is privilege and honor to offer you, our service. &lsquo;&rsquo;Pilgrimage travel makes your mind and soul light&rsquo;&rsquo;.</span></p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><em>We care deeply about your travel experience.</em></p>\n' +
            '\n' +
            '<p><br />\n' +
            '<br />\n' +
            '&nbsp;</p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt">Address&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt">&nbsp;Deerfield Corporate centre One</span></p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt">13010 Morris Road &ndash; Suite 550</span></p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt">Alpharetta, GA 30004</span></p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><a href="Tel:470-854-3505" style="text-decoration-line: none;"><span style="background-color:transparent; color:rgb(5, 99, 193); font-family:calibri,sans-serif; font-size:12pt">Tel:470-854-3505</span></a><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt"> I Email: contact@prophecytours.com</span></p>\n' +
            '\n' +
            '<p><br />\n' +
            '<br />\n' +
            '<br />\n' +
            '<br />\n' +
            '<br />\n' +
            '<br />\n' +
            '<br />\n' +
            '<br />\n' +
            '&nbsp;</p>\n' +
            '\n' +
            '<p dir="ltr" style="text-align:center"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:calibri,sans-serif; font-size:12pt"><img src="https://lh6.googleusercontent.com/WAfyQxMjCa4HwmL9jOxF6tvDrBXtpwBzgG1HQ5pgg2e68CRLT73bo7d4GfiRri5uQ-E3JkTO0xARe__HFs9uZsP_kdh5fB1dLUCg19bV3Au9kfUi8lRkrIxsaNcyt5nqON916oJ4vv7x24wUOrICokK1-7sZCyrI0nlelc0CuPndf_koHtKjzY9bTrEw8g7pojKmeg" style="height:97px; margin-left:0px; margin-top:0px; width:262px" /></span></p>\n' +
            '\n' +
            '<p>&nbsp;</p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">&nbsp;Prophecy Tours are deeply involved in the Holy Land Community supporting Christian Churches, Schools and social Christian Institutions. We started our mission in 2017 from the power for the youth and family ages as a group to achieve our goals.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">We particularly have interest in Private Christian Schools. These schools offer their students a comprehensive and emphases a spiritual and mental atmosphere that is respected by all. They Attempt to meet the needs of all those who are deprived economically. Thus, the school interest in education leads to and become an act of love towards humanity.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">The deteriorated political and economic situation in the Holy Land makes most of the Christian Families not able to afford the school tuitions of their children at private Christian schools. This Makes them look towards public schools were no tuitions are needed, but on the long run religious values and standards are lost.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">We made it our main objectives and goals to support all those students whose families are unable to provide for their children&rsquo;s needs at Christian private schools.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">&nbsp;Only we can do that through marketing our Pilgrimage travel tours in any way that could be Possible. The pilgrimage tours are the major income for the Christians in the holy land scenically the city of Bethlehem, the tours could help in multiple directions starting from visiting schools, Christian foundation, and families.&nbsp;&nbsp;&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">&nbsp;Prophecy Tours is highly recommended by the Catholic, Aramean and orthodox churches in the city of Bethlehem, and they offered us a trust letter which their institution and schools holding the Christian students.&nbsp;&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">During this pandemic many Christian school as facing a funding problem which they are not allowing the managements to pay the salaries as well as the tuition fees of the Christian students.&nbsp;</span></p>\n' +
            '\n' +
            '<p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:12pt">We certainly appreciate your co-operation. May God Bless you and your endeavors by supporting our efforts in helping the small Christian sect of the Holy Land.</span></p>\n' +
            '\n' +
            '<p><br />\n' +
            '&nbsp;</p>\n'},
    ]

    return (
        <Page page_title="About Us" sub_title="Get to know Prophecy, Our Story, Goals, and Values.">
            <div className={classes.wrapper} >
                <AboutItems items={data} />
            </div>
            <Contact/>
        </Page>
    )

}

export default About;