// Libraries
import PropTypes from 'prop-types';
// Styles
import { StyledProfile } from './styles/Styled.profile';
import {
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
} from './styles/Styled.desc';
import {
  StyledStats,
  StyledElement,
  StyledLabel,
  StyledQuantity,
} from './styles/Styled.stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  console.log(stats);
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="User avatar" />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>
      <StyledStats>
        <StyledElement>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{stats.followers}</StyledQuantity>
        </StyledElement>
        <StyledElement>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{stats.views}</StyledQuantity>
        </StyledElement>
        <StyledElement>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{stats.likes}</StyledQuantity>
        </StyledElement>
      </StyledStats>
    </StyledProfile>
  );
};

// Prop types
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
