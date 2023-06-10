import React, {useState} from 'react'
import Ellipse2 from "../review/Ellipse2.png"
import AddReview from './AddReview';
import CustomReviews from './CustomReviews';



    
export default function HardReviews() {
    const [userComment, setUserComment] = useState('');


                    // THE DEFAULT COMMENTS WHEN THE PAGE FIRST RENDERS AFTER HOSTING OR WHEN ALL DYNAMIC REVIEWS ARE DELETED THIS WILL REMAIN
        const [defaultComments, setDefaultComments] = useState([
        { 
            id: 1, 
            author: 'James Daniel', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quia, laborum quos magnam sed, dolores modi magni corrupti quibusdam vitae doloribus ipsa? Veritatis veniam quaerat est eaque? Non, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis, tempora quia ratione asperiores sit iure vitae dolorum qui alias dolorem earum, voluptatum porro eligendi nihil tempore, error ipsum sed!' 
        },

        {
            id: 2,
            author: 'Jane Doe',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quia, laborum quos magnam sed, dolores modi magni corrupti quibusdam vitae doloribus ipsa? Veritatis veniam quaerat est eaque? Non, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis, tempora quia ratione asperiores sit iure vitae dolorum qui alias dolorem earum, voluptatum porro eligendi nihil tempore, error ipsum sed!' 
        },

        {
            id: 3,
            author: 'Mike Adewale', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quia, laborum quos magnam sed, dolores modi magni corrupti quibusdam vitae doloribus ipsa? Veritatis veniam quaerat est eaque? Non, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis, tempora quia ratione asperiores sit iure vitae dolorum qui alias dolorem earum, voluptatum porro eligendi nihil tempore, error ipsum sed!' 
        },

        {
            id: 4, 
            author: 'Sarah Cornor', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quia, laborum quos magnam sed, dolores modi magni corrupti quibusdam vitae doloribus ipsa? Veritatis veniam quaerat est eaque? Non, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis, tempora quia ratione asperiores sit iure vitae dolorum qui alias dolorem earum, voluptatum porro eligendi nihil tempore, error ipsum sed!' 
        },
      ]);

      const [showAllComments, setShowAllComments] = useState(false);    //   SEETING THE SHOW THE ALL REVIEWS BUTTON TO FALSE BY DEFAULT


      const handleAddComment = (newComment) => {
        if (newComment.trim() !== '') {
            setDefaultComments((prevComments) => {
                const updatedComments = [...prevComments.slice(0, 3), 
                    {id: Date.now(), author: "You", text: newComment },];    //WHEN THERE IS A NEW UPDATE, IT REDUCES THE DEFAULT BY ONE
                return updatedComments;
            });
        }
            setUserComment('');
        };
        
      const handleShowAllComments = () => {
        setShowAllComments(true);
      };
    
      const displayedComments = showAllComments ? [...defaultComments] : [...defaultComments.slice(0, 4)];  //ONLY TO DISPLAY 4 REVIEWS

      const allComments = userComment.trim() !== '' ? [userComment, ...displayedComments] : displayedComments;


  return (
    <>
        <section>
            <AddReview onSubmit={handleAddComment} />

            <div className="bg-[#020625]">
                <div className=" mt-10  py-20">
                    <div className=" text-center">
                        <p className="text-white">
                            Our learners review 
                        </p>
                    </div>


                    <div className=" space-y-8 mt-20 md:space-y-0 md:flex justify-between max-w-[1000px] m-auto">
                        <div className=" mx-5 p-2">
                            <div className=" items-center flex">
                                <CustomReviews comments={allComments} />

                                <div className="">
                                    {/* THIS IS  USERCOMMENT.TRIM() IS USED TO PREVENT AN EXTRA DIV AND BOX OF EMPTY COMMENT FROM DISPLAYING IN THE REVIEW SECTION */}
                                    {userComment.trim() !== '' && (
                                        <CustomReviews comments={[userComment, ...displayedComments]} />
                                    )}

                                      {/* THIS IS USED TO DISPLAY THE SEE ALL REVIEWS BUTTON ONCE USERS BEGIN TO ADD REVIEWS */}
                                    {(defaultComments.length > 4 || (userComment.trim() !== '' && displayedComments.length > 4)) && !showAllComments && (
                                    <div className="text-center text-[#020625] bg-white max-w-[600px] mt-5 w-[80%] rounded-lg m-auto py-1">
                                        <button onClick={handleShowAllComments}>
                                        See All Reviews
                                        </button>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}