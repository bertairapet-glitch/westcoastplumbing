import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface ServiceDetailProps {
    serviceId: string;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
    const getServiceContent = (id: string) => {
        switch (id) {
            case '1':
                return {
                    title: 'Drain Cleaning',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
                    content: `Professional drain cleaning is essential for maintaining healthy plumbing systems. Our experienced technicians use advanced methods to clear clogs, remove buildup, and restore proper drainage flow.

Common causes of drain clogs include grease buildup, hair accumulation, food particles, and mineral deposits. Regular maintenance prevents costly backups and plumbing emergencies.

We serve residential and commercial properties throughout Burbank and Los Angeles County, providing thorough drain cleaning services that eliminate clogs at their source. Our methods are safe for your pipes and effective for both minor clogs and severe blockages.

Whether you need routine maintenance or emergency drain clearing, our team delivers reliable, professional service you can trust.`
                };
            case '2':
                return {
                    title: 'Camera Inspection',
                    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
                    content: `Advanced camera inspection technology allows us to see inside your pipes without invasive procedures. Our high-resolution cameras provide clear visuals of pipe conditions, blockages, and potential issues.

This non-destructive inspection method helps identify problems before they become major repairs. We can detect cracks, corrosion, root intrusion, and other issues that aren't visible from the surface.

Our camera inspection services are ideal for diagnosing sewer line problems, checking pipe conditions before property purchases, and verifying the success of previous repairs. We provide detailed reports with video footage and recommendations.

Trust our experienced technicians to deliver accurate diagnostics using state-of-the-art camera equipment throughout Burbank and surrounding areas.`
                };
            case '3':
                return {
                    title: 'Leak Detection',
                    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
                    content: `Detecting leaks requires experience, precision, and the right equipment. Our team uses advanced, non-invasive technology to accurately locate water, gas, and sewer leaks while minimizing damage to your property. Early detection helps prevent costly repairs, water waste, and structural damage—especially important during periods of drought and limited water supply.

Leaks can occur in both older and newer properties due to corrosion, poor installation, aging materials, or ground movement. Small warning signs like dripping faucets, damp spots, or unexplained increases in water bills should never be ignored. Left untreated, minor leaks can escalate into major pipe failures and extensive property damage.

We provide reliable leak detection services throughout Burbank, Los Angeles, and surrounding areas. Our plumbers are trained to identify the source of leaks quickly and efficiently, even when the issue is hidden behind walls, under floors, or underground.

Homeowners, property managers, and insurance providers trust our team for accurate diagnostics and dependable solutions. If you suspect a leak in your home or business, contact us for prompt, professional leak detection service.`
                };
            case '4':
                return {
                    title: 'Hydro Jetting',
                    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
                    content: `Hydro jetting is the most effective method for clearing tough drain clogs and cleaning pipe interiors. Our high-pressure water jetting system uses up to 4,000 PSI of water pressure to blast away grease, scale, roots, and other buildup.

Unlike traditional snaking methods that only push debris further down the line, hydro jetting completely removes blockages and thoroughly cleans pipe walls. This preventive maintenance approach reduces future clogs and extends pipe life.

Our hydro jetting services are safe for most pipe types and are particularly effective for kitchen drains, sewer lines, and commercial plumbing systems. We serve both residential and commercial properties throughout Burbank and Los Angeles County.

Trust our certified technicians to deliver powerful, effective hydro jetting services that restore your plumbing to optimal performance.`
                };
            case '5':
                return {
                    title: 'Copper Repairs',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
                    content: `Copper pipe repairs and replacements require specialized knowledge and precision. Our experienced plumbers are experts in working with copper piping systems, providing reliable repairs and upgrades for residential and commercial properties.

Common copper pipe issues include pinhole leaks, corrosion, joint failures, and freeze damage. We use industry-standard techniques to ensure durable, long-lasting repairs that meet current plumbing codes.

Whether you need emergency copper pipe repairs or are planning a complete system replacement, our team delivers professional service with minimal disruption to your property. We serve customers throughout Burbank and Los Angeles County.

Choose our licensed plumbers for expert copper pipe services that you can depend on for years to come.`
                };
            case '6':
                return {
                    title: 'Commercial Plumbing',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
                    content: `Commercial plumbing requires specialized expertise and reliable service. Our team provides comprehensive plumbing solutions for businesses, offices, retail spaces, and commercial properties throughout Burbank and Los Angeles County.

We understand that commercial downtime costs money, which is why we prioritize fast response times and efficient repairs. Our services include emergency repairs, preventive maintenance, system upgrades, and compliance with commercial building codes.

From restaurants and retail stores to office buildings and warehouses, we deliver professional commercial plumbing services that keep your business running smoothly. Our technicians are experienced with commercial-grade equipment and systems.

Partner with our trusted commercial plumbing experts for reliable service that supports your business operations.`
                };
            case '7':
                return {
                    title: 'Gas Leaks',
                    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
                    content: `Gas leak detection and repair is a critical safety service that requires specialized training and equipment. Our certified technicians use advanced gas detection tools to safely locate and repair gas leaks in residential and commercial properties.

Gas leaks can occur in appliances, piping systems, or utility connections. Warning signs include unusual odors, hissing sounds, dead vegetation, or unexplained increases in gas bills. We treat every gas leak as an emergency to ensure the safety of your property and occupants.

Our gas leak services include detection, repair, appliance testing, and safety inspections. We work with all gas types and are licensed to handle natural gas, propane, and other fuel systems throughout Burbank and Los Angeles County.

Trust our experienced team for professional, safe gas leak detection and repair services you can depend on.`
                };
            case '8':
                return {
                    title: 'Residential Plumbing',
                    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
                    content: `Your home's plumbing system is essential for daily comfort and property value. Our comprehensive residential plumbing services cover everything from routine maintenance to major system upgrades for homeowners throughout Burbank and Los Angeles County.

We provide expert service for kitchens, bathrooms, water heaters, sewer systems, and more. Whether you need fixture installation, pipe repairs, or complete system renovations, our licensed plumbers deliver reliable, professional service.

Regular maintenance and prompt repairs help prevent costly damage and extend the life of your plumbing system. We work with homeowners to develop preventive maintenance plans that keep your home's plumbing in optimal condition.

Choose our trusted residential plumbing experts for quality service that protects your home and family.`
                };
            case '9':
                return {
                    title: 'Sewer Repairs',
                    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
                    content: `Sewer line repairs and replacements are complex projects that require specialized equipment and expertise. Our experienced technicians provide comprehensive sewer services for residential and commercial properties throughout Burbank and Los Angeles County.

We use advanced trenchless technologies whenever possible to minimize landscape disruption and reduce repair costs. Our methods include pipe lining, pipe bursting, and traditional excavation when necessary.

Common sewer issues include root intrusion, pipe corrosion, ground movement, and blockages. Early detection and repair prevent sewage backups, foundation damage, and health hazards.

Trust our certified sewer specialists for professional, durable repairs that restore your sewer system to optimal performance. We provide detailed inspections and honest recommendations for the best solution for your property.`
                };
            case '10':
                return {
                    title: 'Industrial Plumbing',
                    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800',
                    content: `Industrial plumbing systems require heavy-duty solutions designed for demanding environments. Our specialized team provides industrial plumbing services for warehouses, manufacturing facilities, processing plants, and large commercial properties.

We understand the unique challenges of industrial plumbing, including high-volume water usage, chemical resistance, pressure requirements, and compliance with industrial safety standards. Our services include system design, installation, maintenance, and emergency repairs.

From food processing facilities to manufacturing plants, we deliver reliable industrial plumbing solutions that support your operations. Our technicians are experienced with industrial-grade materials and equipment.

Partner with our industrial plumbing experts for robust, dependable systems that meet the demands of your business.`
                };
            default:
                return {
                    title: 'Service Not Found',
                    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
                    content: 'The requested service information is not available.'
                };
        }
    };

    const service = getServiceContent(serviceId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
            <Navbar />
            <main className="pt-20 pb-16 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-20">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100/50 backdrop-blur-sm">
                        <div className="md:flex">
                            <div className="md:w-1/2 relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-600/10"></div>
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-white to-slate-50">
                                <h1 className="text-4xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{service.title}</h1>
                                <div className="prose prose-lg text-slate-600 leading-relaxed whitespace-pre-line">
                                    {service.content}
                                </div>
                                <div className="mt-8">
                                    <a
                                        href="tel:7142679974"
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-purple-200 transform hover:scale-105"
                                    >
                                        📞 Call (714) 267-9974
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
