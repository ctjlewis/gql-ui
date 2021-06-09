/**
 * Display a single User's name and profile picture.
 */
const UserView = ({ name, profilePicture: { url } }) => (
  <div>
    <h1>{name}</h1>
    <img src={url} />
  </div>
);

/**
 * Get single User by ID (here, username is the ID field). Select the fields
 * provided in the `fields` attr.
 * 
 * Here's how we get the User with the id (username) "tommy", and do something
 * with the result.
 */
const singleUserById = (
  <GqlView
    type="User"
    fields={['name', 'profilePicture.src']}
    username="tommy"
  >
    {
      (user) => <UserView {...user} />
    }
  </GqlView>
);

/**
 * Query a list, passing the ...props fields as filters.
 * 
 * Here, select users with either `tommy` or `timmy` usernames.
 */
const queryUsersByFilter = (
  <GqlFilterView
    type="User"
    fields={['name', 'profilePicture.url']}
    username={{ eq: 'tommy', or: { eq: 'timmy' } }}
  >
    {
      (users) => (
        <div>
          {users.map((user) => <UserView {...user} />)}
        </div>
      )
    }
  </GqlFilterView>
);

/**
 * A form that mutates (creates, updates, deletes) a User.
 * 
 * Notice the GqlInputs can introspect the types of the given fields, and
 * generate default labels ("State") and placeholders ("Enter state here") for
 * text inputs. They can be overridden in GqlInput props.
 * 
 * Dynamic behavior:
 * 
 * - GqlForm.method = "create" tells the form to generate a createUser mutation;
 *   "update" is used to modify an existing
 * - User.state is an enum: it will generate a dropdown <select> element
 * - User.dob is a date: it will generate a <date> element
 * - User.profilePicture is an image (has `src` field): will generate an S3
 *   bucket upload
 * 
 * For method = "create", mandatory fields (field: String!) will be required
 * automatically. For "update", all fields are optional.
 */
const gqlForm = (
  <GqlForm type="User" method="create">
    <GqlInput field="name" />
    <GqlInput field="state" />
    <GqlInput field="dob" />
    <GqlInput field="profilePicture" />
  </GqlForm>
);