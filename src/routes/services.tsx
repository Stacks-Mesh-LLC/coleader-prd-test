import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket, Server, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-bg-1 pt-12 pb-24 px-5">
			{/* Hero Section */}
			<section className="max-w-5xl mx-auto text-center mb-24 relative">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="relative z-10"
				>
					<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
						Elevate Your App with <span className="text-accent">Coleader</span>
					</h1>
					<p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
						From concept to scale, our expert team provides end-to-end development and infrastructure scaling services for your next big idea.
					</p>

					<div className="flex justify-center gap-4">
						<Button
							size="lg"
							className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 text-lg h-auto flex items-center gap-2"
							onClick={() => window.open('https://calendly.com/quantumbases/30min', '_blank')}
						>
							<Calendar className="w-5 h-5" />
							Book a Consultation
						</Button>
					</div>
				</motion.div>
			</section>

			{/* Services Grid */}
			<section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
				{[
					{
						icon: <Code className="w-6 h-6 text-accent" />,
						title: 'Custom App Development',
						description: 'We build beautiful, high-performance web and mobile applications tailored precisely to your business needs.'
					},
					{
						icon: <Rocket className="w-6 h-6 text-accent" />,
						title: 'MVP & Prototyping',
						description: 'Rapidly launch your product to market. We help you validate ideas quickly with high-quality MVPs.'
					},
					{
						icon: <Server className="w-6 h-6 text-accent" />,
						title: 'Infrastructure & Scaling',
						description: 'Ensure your app can handle millions of users with robust cloud architecture and performance optimization.'
					},
					{
						icon: <Users className="w-6 h-6 text-accent" />,
						title: 'Team Augmentation',
						description: 'Scale your engineering capacity instantly with our elite developers who seamlessly integrate with your team.'
					},
					{
						icon: <Briefcase className="w-6 h-6 text-accent" />,
						title: 'Technical Consulting',
						description: 'Get expert guidance on architecture, tech stack selection, and AI integration for your platform.'
					}
				].map((service, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className="bg-surface-secondary border border-border/50 rounded-2xl p-8 hover:bg-surface-tertiary transition-colors duration-300"
					>
						<div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
						<p className="text-text-secondary leading-relaxed">{service.description}</p>
					</motion.div>
				))}
			</section>

			{/* Contact / CTA Section */}
			<section className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="bg-gradient-to-br from-surface-secondary to-surface-tertiary border border-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
				>
					<div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

					<h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 relative z-10">
						Ready to build something amazing?
					</h2>
					<p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto relative z-10">
						Schedule a free discovery call with our technical experts to discuss your app requirements and scaling needs.
					</p>

					<div className="relative z-10 inline-block w-full max-w-[800px] h-[700px] rounded-xl overflow-hidden border border-border bg-bg-2">
						{/* Calendly Inline Widget */}
						<iframe
							src="https://calendly.com/quantumbases/30min"
							width="100%"
							height="100%"
							frameBorder="0"
							title="Book a Meeting"
						></iframe>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
