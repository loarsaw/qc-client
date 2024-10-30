import { setModal } from '@/redux/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import axiosClient from '@/utils/axiosInstance'
import { Modal, Select } from '@mantine/core'
import React, { useState } from 'react'

function SelectionModal() {
    const dispatch = useAppDispatch()
    const { isOpen } = useAppSelector(state => state.modal)
    const [level, setLevel] = useState()
    const [techStack, setTechStack] = useState("")
    async function onSubmit() {
        const data = await axiosClient.post("/onboarding")
    }
    return (
        <Modal
            opened={true}
            onClose={() => {
                dispatch(setModal(false))
            }}
            title="Onboarding"
        >

            <div className=' '>
                <div>
                    <Select
                        label="Expertise"
                        placeholder='Beginner, Intermediate , Expert'
                        data={["Beginner", "Intermediate", "Expert"]}
                        clearable
                    />
                </div>
                <div>
                    <Select
                        label="Learning Goal"
                        placeholder='Frontend , Backend , Fullstack , Mobile Application'
                        data={["Frontend", "Backend", "Fullstack", "Mobile Application"]}
                        clearable
                    />
                </div>

                <div>
                    <Select
                        label="Are you familiar with GIT and GITHUB"
                        placeholder='Yes , No'
                        data={["Yes ", "No"]}
                        clearable
                    />
                </div>

                <div>
                    <Select
                        label="Select correct statement to commit"
                        // placeholder='Yes , No'
                        data={["git commit -m first-commit", "git commit first-commit", "git push", "git reset --hard ~HEAD"]}
                        clearable
                    />
                </div>


                <div>
                    <Select
                        label="Are you a student"
                        placeholder='Yes , No'
                        // data={["git commit -m first-commit", "git commit first-commit", "git push", "git reset --hard ~HEAD"]}
                        data={["Yes", "No"]}
                        clearable
                    />
                </div>

            </div>
            <div className='w-full flex justify-end p-3'>
                <div className='p-2 bg-blue-500 text-white rounded-md'>Submit</div>
            </div>
        </Modal>
    )
}

export default SelectionModal