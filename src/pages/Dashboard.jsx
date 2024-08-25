import {useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGithubUser ,rateLimit } from '../store/githubSlice'
import {
  SectionWrapper,
  Input,
  Info,
  User,
  Followers,
  Navbar,
  Repos
} from "../components";

const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getGithubUser("andrew"))
    dispatch(rateLimit())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <Input />
        <Info />
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <User />
          <Followers />
        </div>
        <Repos />
      </SectionWrapper>
    </>
  );
};

export default Dashboard;
