import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImprovedNavbar from '../components/ImprovedNavbar';

const AccessibleComponentsPage = () => {
  const [activeSection, setActiveSection] = useState('');
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize active section on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white font-poppins">CS1300: Accessible Components</h1>
            
            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 pr-0 md:pr-0">
                <li>
                  <a 
                    onClick={() => scrollToSection('overview')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'overview' ? 'border-b-2 border-white' : ''}`}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('input-analysis')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'input-analysis' ? 'border-b-2 border-white' : ''}`}
                  >
                    Input Analysis
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('output-analysis')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'output-analysis' ? 'border-b-2 border-white' : ''}`}
                  >
                    Output Analysis
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('state-models')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'state-models' ? 'border-b-2 border-white' : ''}`}
                  >
                    State Models
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('component-redesign')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'component-redesign' ? 'border-b-2 border-white' : ''}`}
                  >
                    Redesign
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('reflection')} 
                    className={`text-white hover:text-blue-200 cursor-pointer font-poppins ${activeSection === 'reflection' ? 'border-b-2 border-white' : ''}`}
                  >
                    Reflection
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Analysis Tables Section */}
        <section id="overview" className="mb-8 pt-6">
          <h2 className="text-2xl font-semibold text-[#4e54c8] mb-4 font-poppins">Project Overview</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-gray-800 text-lg font-poppins">
                In this analysis, I explored the accessibility implications of destructive action confirmations—a critical yet often overlooked component of user interfaces. By examining popup dialogs across Discord, Photoshop, and Microsoft Word, I investigated how different applications handle these irreversible actions through various input methods and output indicators.
              </p>

              <div className="py-4">
                <h2 className="text-3xl font-semibold text-[#4e54c8] mb-6 font-poppins">What is a Destructive Action Dialog?</h2>
                
                <p className="text-gray-800 text-lg mb-6 font-poppins">
                  A destructive action dialog serves as a crucial safety mechanism, requiring user confirmation before executing irreversible operations like deletions or permanent changes. These dialogs must balance efficient interaction with adequate protection against accidental actions.
                </p>

                <p className="text-gray-800 text-lg font-poppins">
                  Let's examine how different applications approach this challenge, and explore opportunities to enhance both accessibility and user safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="input-analysis" className="space-y-8 mt-4 pt-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4e54c8] mb-4 font-poppins">Input Analysis</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Application</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Mouse/Touchpad</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Keyboard Navigation</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Touch (if available)</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Functionality & Limitations</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Learnability & Efficiency</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Accessibility (Focus Order & Screen Readers)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Discord */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Discord</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Click 'OK' or 'Cancel' with the mouse</li>
                        <li>Right-click options available</li>
                        <li>Cannot reposition the dialog</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tab navigates between buttons</li>
                        <li>Enter confirms selection</li>
                        <li>Esc closes the dialog</li>
                        <li>No shortcuts for quick access</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tap on buttons</li>
                        <li>No swipe gestures supported</li>
                        <li>May not be optimized for mobile</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Buttons can be selected</li>
                        <li>No drag-and-drop support</li>
                        <li>Esc closes without confirmation</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Easy to learn but lacks efficiency for power users</li>
                        <li>No quick keyboard shortcuts</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Focus order is logical but lacks screen reader cues</li>
                        <li>No high contrast support</li>
                      </ul>
                    </td>
                  </tr>
                  
                  {/* Photoshop */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Photoshop</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Click 'Yes', 'No', or 'Cancel' with mouse</li>
                        <li>Can drag the window</li>
                        <li>Some dialogs have additional options</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tab navigates</li>
                        <li>Enter confirms</li>
                        <li>Esc cancels</li>
                        <li>Some dialogs support Ctrl+S for saving</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tap on buttons</li>
                        <li>No gesture controls available</li>
                        <li>Some dialogs may be too small on touchscreens</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Text cannot be copied</li>
                        <li>Dialogs sometimes allow saving directly with shortcuts</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Moderate learnability</li>
                        <li>Frequent users remember shortcuts like Ctrl+S</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Well-structured focus order</li>
                        <li>Screen reader announces labels, but lacks descriptions</li>
                      </ul>
                    </td>
                  </tr>
                  
                  {/* Microsoft Word */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Microsoft Word</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Click 'OK', 'Cancel', or other options with mouse</li>
                        <li>Can reposition dialogs</li>
                        <li>Right-click context menus available</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tab navigates between fields</li>
                        <li>Enter confirms</li>
                        <li>Esc cancels</li>
                        <li>Supports keyboard shortcuts (Ctrl+S, Alt+key)</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Tap buttons and fields</li>
                        <li>Supports basic touch gestures</li>
                        <li>Optimized for tablets with touch mode</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Rich text formatting</li>
                        <li>Robust dialog options</li>
                        <li>Context-sensitive help</li>
                        <li>Supports file autosaving</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>High learnability with ribbon interface</li>
                        <li>Efficient for power users with customizable shortcuts</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Strong accessibility features</li>
                        <li>Logical focus order</li>
                        <li>Screen reader announcements</li>
                        <li>High contrast support</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4e54c8] mb-4 font-poppins">Key Findings & Improvements</h3>
                <ul className="space-y-3 text-gray-800 list-disc pl-5 font-poppins">
                  <li><strong>Single-Click Vulnerability:</strong> Current confirmation dialogs often rely on a single click for destructive actions, making it too easy for users to accidentally confirm irreversible operations, particularly affecting users with motor control challenges.</li>
                  <li><strong>Inadequate Visual Warnings:</strong> Existing interfaces lack clear visual indicators and warning messages about the destructive nature of actions, creating potential risks for users with cognitive impairments or those who process information differently.</li>
                  <li><strong>Limited Interaction Feedback:</strong> Most applications provide minimal feedback about action states and confirmation requirements, lacking clear indicators of what actions are needed to proceed or how to safely cancel operations.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-[#4e54c8] mb-6 font-poppins">Application Dialog Examples</h3>
                
              <div className="mb-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center font-poppins">Desktop UI</h4>
                <div className="grid md:grid-cols-2 gap-6"></div>  
                {/* Photoshop */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Adobe Photoshop Save Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture1.png"
                      alt="Photoshop save changes dialog with Save, Don't Save, and Cancel options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Microsoft Word Save Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture2.png"
                      alt="Microsoft Word save changes dialog with Save, Don't Save, and Cancel options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Discord Delete Message Dialog</h4>
                  <div className="flex justify-center">
                    <Image 
                      src="/images/Picture5.png"
                      alt="Discord delete message confirmation dialog with Yes and No options"
                      width={800}
                      height={450}
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center font-poppins">Mobile UI</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-medium text-[#4e54c8] mb-4 text-center font-poppins">Discord Delete Message Dialog</h4>
                    <div className="flex justify-center">
                      <div className="w-1/2">
                        <Image 
                          src="/images/Picture3.png"
                          alt="Discord mobile delete message confirmation dialog with Yes and No options"
                          width={400}
                          height={600}
                          className="rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-lg font-medium text-[#4e54c8] mb-4 text-center font-poppins">Word Mobile Delete Dialog</h4>
                    <div className="flex justify-center">
                      <div className="w-1/2">
                        <Image 
                          src="/images/Picture4.png"
                          alt="OneDrive mobile delete confirmation dialog with YES and NO options"
                          width={400}
                          height={600}
                          className="rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>               
                </div>
              </div>
            </div>   
          </section>

          <section id="output-analysis" className="pt-6">
            <h2 className="text-2xl font-semibold text-[#4e54c8] mb-4 font-poppins">Output Analysis</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Application</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Visual Cues</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Text & Labels</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Focus Order</th>
                    <th className="p-3 text-left border border-gray-200 font-bold text-gray-900 font-poppins">Screen Reader Support</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Discord */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Discord</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Popup background darkens</li>
                        <li>Buttons change color on hover</li>
                        <li>Borders highlight focus</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Clear text labels for 'Cancel' and 'OK'</li>
                        <li>No additional descriptions</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Logical order: Starts at the message</li>
                        <li>Then moves to buttons with Tab</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Reads button labels but lacks additional descriptions</li>
                        <li>No role announcements</li>
                      </ul>
                    </td>
                  </tr>
                  {/* Photoshop */}
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Photoshop</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Dialog has drop shadow</li>
                        <li>Buttons highlight on hover</li>
                        <li>No background dimming</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Includes full sentences like 'Do you want to save changes?'</li>
                        <li>Buttons labeled clearly</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Well-structured: Starts at the message</li>
                        <li>Then moves through buttons logically</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Good screen reader support</li>
                        <li>Announces full text and buttons with context</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">Microsoft Word</td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Dialog uses Office theme styling</li>
                        <li>Background dimming effect</li>
                        <li>Visual indicators for selection focus</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Descriptive button labels</li>
                        <li>Contextual explanations</li>
                        <li>Error messages with suggested fixes</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Structured focus order</li>
                        <li>Moves from content to primary action buttons in logical sequence</li>
                      </ul>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-900 font-poppins">
                      <ul className="list-disc pl-5">
                        <li>Comprehensive screen reader support</li>
                        <li>ARIA labels</li>
                        <li>Role announcements</li>
                        <li>Keyboard navigation cues</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        {/* State Models Section */}
        <section id="state-models" className="pt-6">
          <h2 className="text-2xl font-semibold text-[#4e54c8] mb-6 font-poppins">State Models</h2>
          <div className="space-y-8">
            {/* Initial State Models */}
            <div>
              <h3 className="text-xl font-medium text-[#4e54c8] mb-4 font-poppins">Initial State Models</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Initial Mouse User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image
                      src="/images/initial-mouse.jpg" 
                      alt="Initial mouse user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Initial Keyboard User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/initial-keyboard.jpg"
                      alt="Initial keyboard user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Revised State Models */}
            <div>
              <h3 className="text-xl font-medium text-[#4e54c8] mb-4 font-poppins">Revised State Models</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Revised Mouse User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/revised-mouse.jpg"
                      alt="Revised mouse user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Revised Keyboard User Flow</h4>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                    <Image 
                      src="/images/revised-keyboard.jpg"
                      alt="Revised keyboard user state diagram"
                      width={800}
                      height={600}
                      className="object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Figma Designs Section */}
        <section id="component-redesign" className="pt-6">
          <h2 className="text-2xl font-semibold text-[#4e54c8] mb-6 font-poppins">Component Redesign</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Initial State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image 
                  src="/images/Destructive Dialog Design.png"
                  alt="Initial state Figma design"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4 font-poppins">
                Basic confirmation dialog with standard button layout and clear warning message. Keyboard shortcuts (C) are visible to support both mouse and keyboard users.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Hover State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image
                  src="/images/Destructive Dialog After1.png"
                  alt="Hover state Figma design"
                  width={800}
                  height={600} 
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4 font-poppins">
                Enhanced warning state with double-click requirement for destructive actions. High-contrast warning banner and icon improve visibility and emphasize importance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Confirmation State</h3>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4">
                <Image 
                  src="/images/Destructive Dialog After2.png"
                  alt="Initial state Figma design"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg border border-gray-200"
                />
              </div>
              <p className="text-gray-700 mt-4 font-poppins">
                Clear action button labeling with "(Click Again)" instruction promotes user confidence. Red button color reinforces destructive nature while maintaining accessibility.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-[#4e54c8] mb-4 font-poppins">Intentional Trade-off Analysis</h3>
            
            <p className="text-gray-600 mb-4 font-poppins">
              I deliberately traded immediate action efficiency for enhanced user safety and accessibility. By implementing a two-step confirmation process with explicit warning states, the design purposefully slows down destructive actions to prevent accidental triggering, particularly benefiting users with motor control challenges or cognitive processing needs.
            </p>
            
            <p className="text-gray-600 mb-4 font-poppins">
              This careful balance between efficiency and protection is achieved through a progression of states: starting with a clean, uncluttered interface that maintains Discord's simplicity, then transitioning to a more explicit warning state with high-contrast visual cues and keyboard shortcuts. This multi-step approach places user safety and accessibility above speed of execution.
            </p>
            
            <p className="text-gray-600 mb-4 font-poppins">
              While this design choice deliberately increases interaction time for destructive actions, it creates a more inclusive and safer interface by providing multiple confirmation checkpoints, clear visual feedback, and explicit instructions. The trade-off prioritizes error prevention and accessibility over rapid task completion, reflecting a conscious decision to favor user safety over speed.
            </p>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="pt-6">
          <h2 className="text-2xl font-semibold text-[#4e54c8] mb-4 font-poppins">Reflection</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-4 text-gray-600 font-poppins">
                <li>
                  <strong>Component Strengths:</strong> Microsoft Word demonstrated excellent accessibility with comprehensive keyboard navigation and screen reader support. I've applied this in my design through clear focus indicators and ARIA labels, while also maintaining Discord's simplicity in visual presentation.
                </li>
                
                <li>
                  <strong>Addressing Gaps:</strong> While existing applications handle basic interactions well, they often lack clear feedback for destructive actions. My design introduces enhanced warning states and confirmation dialogs, particularly benefiting users with cognitive impairments or anxiety about irreversible actions.
                </li>
                
                <li>
                  <strong>Mismatch Solution:</strong> My design addresses fundamental mismatches between human capabilities and interface requirements: motor control mismatches through larger hit areas and multiple interaction methods, cognitive mismatches through clear warning states for destructive actions, and perception mismatches by providing both visual and auditory feedback. This aligns with Holmes' definition of disability as a mismatch between human features and environmental design, turning potential barriers into inclusive interaction opportunities.
                </li>
                
                <li>
                  <strong>Inclusive Design Evolution:</strong> My solution reflects Holmes' principle that inclusive design often originates from solving specific mismatches, similar to how the typewriter emerged from making writing accessible to the blind. By starting with critical user needs (preventing accidental destructive actions) and incorporating multi-modal feedback (visual, keyboard, and screen reader cues), the design creates a more robust solution that benefits all users. Like Holmes' examples of the typewriter and automated captioning, this design demonstrates how addressing accessibility "mismatches" leads to better overall user experiences rather than just accommodating specific disabilities.
                </li>

                <li>
                  <strong>Impact Examples:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Discord's lack of dialog repositioning negatively impacts users with motor impairments who might need to move dialogs to see context behind them</li>
                    <li>Microsoft Word's high-contrast support and keyboard shortcuts positively impact users with visual impairments by providing multiple ways to interact</li>
                  </ul>
                </li>
                
                <li>
                  <strong>User Prioritization:</strong> Mouse users are typically prioritized in component design, followed by keyboard users, with touch and screen reader users often considered last. This prioritization can lead to suboptimal experiences for users relying on assistive technologies, necessitating workarounds or accepting limited functionality.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center">
            <p className="text-white font-poppins">&copy; 2025 Diksha Krishnan. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation Menu (Hidden by default) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" id="mobile-menu">
        <div className="bg-white h-full w-2/3 max-w-xs p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-[#4e54c8] font-poppins">Navigation</h3>
            <button className="text-gray-500 focus:outline-none" id="close-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li><a onClick={() => scrollToSection('overview')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">Overview</a></li>
              <li><a onClick={() => scrollToSection('input-analysis')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">Input Analysis</a></li>
              <li><a onClick={() => scrollToSection('output-analysis')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">Output Analysis</a></li>
              <li><a onClick={() => scrollToSection('state-models')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">State Models</a></li>
              <li><a onClick={() => scrollToSection('component-redesign')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">Redesign</a></li>
              <li><a onClick={() => scrollToSection('reflection')} className="text-gray-700 hover:text-[#4e54c8] font-poppins">Reflection</a></li>
              <li className="pt-6 border-t border-gray-200">
                <a href="index.html" className="text-[#4e54c8] font-semibold font-poppins">Back to Portfolio</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AccessibleComponentsPage;