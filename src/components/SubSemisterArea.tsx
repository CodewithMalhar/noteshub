import { useParams } from "react-router-dom";
import {  dynamicSem2State } from '../states/Sem2.state';
import { dynamicSem3State} from '../states/Sem3.state';
import {  dynamicSem4State } from '../states/Sem4.state';
import {  dynamicSem5State} from '../states/Sem5.state';
import {  dynamicSem6State} from '../states/Sem6.state';
import {  dynamicSem7State} from '../states/Sem7.state';
import { dynamicSem8State} from '../states/Sem8.state';
import CardLoading from './CardLoading';
import { Suspense, useEffect } from 'react';
import { lazy,  useState } from "react";
import { useRecoilValue } from "recoil";
import { storage } from '../config/firebase.config';
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Subject = lazy(() => import("./Subject"));


function SubSemisterArea() {
    const [skeleton, setSkeleton] = useState(false);
    const [subjectsArea, setSubjectsArea] = useState<any>();
    const [documentsNotes, setDocumentsNotes] = useState<any>();
    const [referenceBooks, setReferenceBooks] = useState<any>();
    const [recommendedBooks, setRecommendedBooks] = useState<any>();
    const [questionBanks, setQuestionBanks] = useState<any>();
    const [syllabus, setSyllabus] = useState<any>();
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [allNotes, setAllNotes] = useState<any[]>([]);
    const [isShowingAllNotes, setIsShowingAllNotes] = useState(false);
    const queryParams=new URLSearchParams(location.search)
    let sub = queryParams.get('sub');
    if(!sub)sub='cse';

    const sem1 = useRecoilValue(dynamicSem2State(sub));
    const sem2 = useRecoilValue(dynamicSem2State(sub));
    const sem3 = useRecoilValue(dynamicSem3State(sub));
    const sem4 = useRecoilValue(dynamicSem4State(sub));
    const sem5 = useRecoilValue(dynamicSem5State(sub));
    const sem6 = useRecoilValue(dynamicSem6State(sub));
    const sem7 = useRecoilValue(dynamicSem7State(sub));
    const sem8 = useRecoilValue(dynamicSem8State(sub));
    // console.log(sem5);
    // console.log(sem2);
    // console.log(sem3);
    interface Subject {
        name: string;
        totalC: number;
        questionC: number;
        notesC: number;
        onlineRefC: number;
    }
    const subMap:Record<string,string>={
        "cse":"CSE",
        "mech":"MECHANICAL",
        "entc":"E & TC",
        "civil":"CIVIL",
    }
    const semDatRef: Record<string, typeof sem3> = {
        "Sem-I": sem1,
        "Sem-II": sem2,
        "Sem-III": sem3,
        "Sem-IV": sem4,
        "Sem-V": sem5,
        "Sem-VI": sem6,
        "Sem-VII": sem7,
        "Sem-VIII": sem8
    }
    const semFolderRef: Record<string, string> = {
        "Sem-I": "Semester 1",
        "Sem-II": "Semester 2",
        "Sem-III": "Semester 3",
        "Sem-IV": "Semester 4",
        "Sem-V": "Semester 5",
        "Sem-VI": "Semester 6",
        "Sem-VII": "Semester 7",
        "Sem-VIII": "Semester 8"
    }
    const { semId, subject } = useParams();
    // console.log(semId, subject);
    console.log(semId, subject)

    const toggleSortOrder = () => {
        if (sortOrder === null) setSortOrder('desc');
        else if (sortOrder === 'desc') setSortOrder('asc');
        else setSortOrder(null);
    };

    const sortNotesByTime = (notes: any[]) => {
        if (!sortOrder || !notes) return notes;
        
        return [...notes].sort((a, b) => {
            if (sortOrder === 'desc') {
                return b.uploadTime - a.uploadTime;
            } else {
                return a.uploadTime - b.uploadTime;
            }
        });
    };

    useEffect(() => {
        const fetchFiles = async () => {
            setDocumentsNotes(undefined)
            setReferenceBooks(undefined)
            setRecommendedBooks(undefined)
            setQuestionBanks(undefined)
            setSyllabus(undefined)
            setAllNotes([])
            setSkeleton(true)
            if (semId && subject) {
                const DocumentsNotesRef = ref(storage, `Department Notes/${subMap[sub]}/${semFolderRef[semId]}/${subject}/Documents Notes/`);
                const QuestionBanksRef = ref(storage, `Department Notes/${subMap[sub]}/${semFolderRef[semId]}/${subject}/Question Banks/`);
                const RecommendedBooksRef = ref(storage, `Department Notes/${subMap[sub]}/${semFolderRef[semId]}/${subject}/Recommended Books/`)
                const ReferenceBooksRef = ref(storage, `Department Notes/${subMap[sub]}/${semFolderRef[semId]}/${subject}/Reference Books/`)
                const SyllabusRef = ref(storage, `Department Notes/${subMap[sub]}/${semFolderRef[semId]}/${subject}/Syllabus/`)
                
                // Helper function to get files with metadata
                const getFilesWithMetadata = async (folderRef: any, category: string) => {
                    const res = await listAll(folderRef);
                    return Promise.all(
                        res.items.map(async item => {
                            const url = await getDownloadURL(item);
                            // Get metadata to access creation time
                            const metadata = await getMetadata(item);
                            return { 
                                name: item.name, 
                                url, 
                                category,
                                uploadTime: metadata.timeCreated ? new Date(metadata.timeCreated).getTime() : 0,
                                uploadTimeFormatted: metadata.timeCreated ? new Date(metadata.timeCreated).toLocaleString() : 'Unknown'
                            };
                        })
                    );
                };

                const [Docres, Refres, Recres, Syllres, Queres] = await Promise.all([
                    getFilesWithMetadata(DocumentsNotesRef, 'Documents Notes'),
                    getFilesWithMetadata(ReferenceBooksRef, 'Reference Books'),
                    getFilesWithMetadata(RecommendedBooksRef, 'Recommended Books'),
                    getFilesWithMetadata(SyllabusRef, 'Syllabus'),
                    getFilesWithMetadata(QuestionBanksRef, 'Question Banks')
                ]);

                setDocumentsNotes(Docres);
                setReferenceBooks(Refres);
                setRecommendedBooks(Recres);
                setQuestionBanks(Queres);
                setSyllabus(Syllres);

                // Combine all notes for the "All Notes" view
                const combined = [...Docres, ...Refres, ...Recres, ...Syllres, ...Queres];
                setAllNotes(combined);
            }
            setSkeleton(false)
        }
        try {
            fetchFiles();
        } catch (error) {
            console.log(error);
        }
        // console.log(documentsNotes);

    }, [subject, sortOrder])
    
    useEffect(() => {
        // let list = document.querySelector('.data');
        // eleContext.target.setAttribute("className", ".active")
        if (semId) setSubjectsArea(semDatRef[semId]);
    }, [semId])

    const renderNoteCard = (item: any, index: number) => (
        <div key={index} className="card bg-white p-2 rounded-lg shadow-2xl ">
            <div className="title text-2xl font-bold">{item?.name}</div>
            <div className="h-1 w-full bg-slate-400 "></div>
            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                <div className="text-sm">{item.category}</div>
                <div className="text-sm">Uploaded: {item.uploadTimeFormatted}</div>
            </div>
            <a href={item.url} target="_blank" >
                <div className="content text-lg cursor-pointer text-center">Download Doc</div>
            </a>
        </div>
    );

    return (
        <div>
            {subject && (documentsNotes || referenceBooks || recommendedBooks || questionBanks || syllabus) && (
                <div className="control-panel mb-4 flex justify-between items-center">
                    <div className="view-toggle">
                        <button 
                            onClick={() => setIsShowingAllNotes(!isShowingAllNotes)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                        >
                            {isShowingAllNotes ? "View By Category" : "View All Notes"}
                        </button>
                    </div>
                    
                    <div className="sort-control">
                        <button 
                            onClick={toggleSortOrder} 
                            className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                        >
                            <span className="mr-2">Sort by Time</span>
                            <FontAwesomeIcon 
                                icon={sortOrder === 'asc' ? faSortUp : sortOrder === 'desc' ? faSortDown : faSort} 
                                className="text-gray-700"
                            />
                        </button>
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
                {skeleton ? <CardLoading /> : ""}
                {skeleton ? <CardLoading /> : ""}
                {skeleton ? <CardLoading /> : ""}
                {skeleton ? <CardLoading /> : ""}
                {
                    subject &&
                        (documentsNotes == null || documentsNotes == undefined) &&
                        (referenceBooks == null || referenceBooks == undefined) &&
                        (recommendedBooks == null || recommendedBooks == undefined) &&
                        (questionBanks == null || questionBanks == undefined) &&
                        (syllabus == null || syllabus == undefined) &&
                        !skeleton ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl text-slate-600 '>Select something</div> : ""
                }

                {/* All Notes View */}
                {subject && isShowingAllNotes && allNotes && allNotes.length > 0 ? (
                    sortNotesByTime(allNotes).map((item, index) => renderNoteCard(item, index))
                ) : ""}

                {/* Categorized View */}
                {!isShowingAllNotes && (
                    <>
                        {subject && referenceBooks ? sortNotesByTime(referenceBooks).map((item: any, index: number) => renderNoteCard(item, index)) : ""}
                        
                        {subject && documentsNotes ? sortNotesByTime(documentsNotes).map((item: any, index: number) => renderNoteCard(item, index)) : ""}
                        
                        {subject && recommendedBooks ? sortNotesByTime(recommendedBooks).map((item: any, index: number) => renderNoteCard(item, index)) : ""}
                        
                        {subject && questionBanks ? sortNotesByTime(questionBanks).map((item: any, index: number) => renderNoteCard(item, index)) : ""}
                        
                        {subject && syllabus ? sortNotesByTime(syllabus).map((item: any, index: number) => renderNoteCard(item, index)) : ""}
                    </>
                )}

                {!subject
                    ? subjectsArea
                        ? subjectsArea.length > 0
                            ? subjectsArea.map((subject: Subject, index: number) => {
                                if (typeof subject === 'object' && subject !== null) {
                                    return (
                                        <Suspense key={index} fallback={<CardLoading />}>
                                            <Subject {...subject} semId={semId} />
                                        </Suspense>
                                    )
                                }
                            })
                            : <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2  text-3xl text-slate-600 w-[100%]'>No subjects</div>
                        : <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl  text-slate-600 '>Select something</div>
                    : ""
                }
            </div>
        </div>
    )
}


export default SubSemisterArea;