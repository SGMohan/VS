
import PropTypes from 'prop-types'

const Profile = ({name, work, profilePic}) => {
  return (
      <div className="max-w-sm mx-auto shadow-lg rounded-lg p-6 border-2 border-grey-300 text-center bg-white">
          <img src={profilePic} alt={name + " pic"} className="w-full object-cover h-54 rounded-lg" />
              <h2 className="text-3xl font-semibold mb-2 mt-4 ">{name}</h2>
          <h3 classname="text-2xl text-grey-400">{ work}</h3>
        
    </div>
  )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
};

export default Profile