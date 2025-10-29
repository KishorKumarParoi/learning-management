import React from 'react'
import { Accordion, AccordionContent, AccordionItem } from './accordion'
import { AccordionTrigger } from '@radix-ui/react-accordion'
import { Book, BookOpen, FileText } from 'lucide-react'

const AccordionSections = ({ sections }: AccordionSectionsProps) => {
    return (
        <Accordion type="multiple" className='w-full'>
            {
                sections.map((section) => (
                    <AccordionItem
                        key={section.sectionId}
                        value={section.sectionTitle}
                        className='accordion-section'
                    >
                        <AccordionTrigger className='accordion-section__trigger'>
                            <h5 className='accordion-section__title'>
                                <BookOpen className='mr-2 w-4 h-4 inline' />
                                {section.sectionTitle}
                            </h5>
                        </AccordionTrigger>
                        <AccordionContent className="accordion-section__content">
                            <ul>
                                {
                                    section.chapters.map((chapter) => (
                                        <li key={chapter.chapterId} className='accordion-section__chapter'>
                                            <FileText className='mr-2 w-4 h-4' />
                                            <span className='text-sm'>{chapter.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default AccordionSections