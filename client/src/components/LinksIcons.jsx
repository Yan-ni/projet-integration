import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import tumblr from '../assets/tumblr.svg';
import flickr from '../assets/flickr.svg';

export default function LinksIcons({ links }) {
  const {
    facebook_url,
    instagram_url,
    twitter_url,
    youtube_url,
    linkedin_url,
    github_url,
    tumblr_url,
    flickr_url,
  } = links;
  return (
    <>
      <h3>réseaux sociaux</h3>
      <div className="links">
        {facebook_url && (
          <a href={facebook_url} target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook url" />
          </a>
        )}
        {instagram_url && (
          <a href={instagram_url} target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram url" />
          </a>
        )}
        {twitter_url && (
          <a href={twitter_url} target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter url" />
          </a>
        )}
        {youtube_url && (
          <a href={youtube_url} target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube url" />
          </a>
        )}
        {linkedin_url && (
          <a href={linkedin_url} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin url" />
          </a>
        )}
        {github_url && (
          <a href={github_url} target="_blank" rel="noreferrer">
            <img src={github} alt="github url" />
          </a>
        )}
        {tumblr_url && (
          <a href={tumblr_url} target="_blank" rel="noreferrer">
            <img src={tumblr} alt="tumblr url" />
          </a>
        )}
        {flickr_url && (
          <a href={flickr_url} target="_blank" rel="noreferrer">
            <img src={flickr} alt="flickr url" />
          </a>
        )}
      </div>
    </>
  );
}
