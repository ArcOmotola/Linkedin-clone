/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { connect } from "react-redux";

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                    {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt=""/>
            ) : (
                <img src="/images/photo.svg" alt=""/>
            )} 
                        <Link>Welcome, {props.user ? props.user.displayName : "there"}!</Link>
                    </a>
                    <a>
                        <BlueText>Add a photo</BlueText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt=""/>
                        My Items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt=""/>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
            <InterestCard>
                <SecondBlueText>Followed Hashtags</SecondBlueText>
                <a>
                    <span># partnerships</span>
                </a>
                <a>
                    <span># engineering</span>
                </a>
                <a>
                    <span># design</span>
                </a>
                <a>
                    <span># commerce</span>
                </a>
                <a>
                    <span># writing</span>
                </a>
                <a>
                    <span># education</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </InterestCard>
        </Container>
    );
};

const Container = styled.div`
    grid-area: leftside;
`;


const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;

    img {
        box-shadow: none;
  
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
    }
`;

const CardBackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url("/images/photo.svg");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 15px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`;

const BlueText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;

`;

const SecondBlueText = styled(BlueText) `
    margin: 12px;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;
            span {
                font-size: 12px;
                line-height: 1.333;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }

    svg {
        color: rgba(0, 0, 0, 1);
    }
`;

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    display: block;
    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
        svg {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    position: -webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 50px;

    a {
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;

        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child {
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;

            border-top: 1px solid #d6cec2;
            padding: 12px;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }

    position: -webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 50px;
`;

const InterestCard = styled(CommunityCard)`
    position: -webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 180px;

    span {
        font-size: 12px;
        font-weight: 700px;
        color: grey;
    }
    
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(LeftSide);