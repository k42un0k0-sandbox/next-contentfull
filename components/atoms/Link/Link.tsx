import NextLink, { LinkProps } from "next/link"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"

type Props = { href: LinkProps["href"] } & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Link: React.FC<Props> = ({ href, ...props }) => {
    return <NextLink href={href} passHref>
        <a {...props} />
    </NextLink>
}
export default Link