# GroveUI Documentation

Welcome to the GroveUI documentation. This folder contains comprehensive guides for understanding, using, and contributing to GroveUI.

---

## Quick Links

| Document | Description |
|----------|-------------|
| [PROJECT_SPEC.md](./PROJECT_SPEC.md) | Project specification, scope, and requirements |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Technical architecture and design decisions |
| [USAGE.md](./USAGE.md) | Installation, setup, and component usage guide |

---

## For Users

**Getting Started:**
1. Read the main [README.md](../README.md) for installation
2. Check [USAGE.md](./USAGE.md) for detailed examples
3. Explore components at [ui.grove.place](https://ui.grove.place)

**Key Concepts:**
- GroveUI is a **Svelte 5** component library
- Uses **Tailwind CSS** for styling
- Provides a **Tailwind preset** with Grove design tokens
- Components are **tree-shakeable** via subpath imports

---

## For Contributors

**Understanding the Project:**
1. Start with [PROJECT_SPEC.md](./PROJECT_SPEC.md) to understand scope
2. Read [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
3. Check [../AGENT.md](../AGENT.md) for development guidelines

**Key Files:**
- `src/lib/index.ts` - Main package entry
- `src/lib/tailwind.preset.js` - Design tokens
- `src/lib/components/` - All components
- `package.json` - Export configuration

---

## Document Overview

### PROJECT_SPEC.md
The project specification covers:
- Executive summary and problem statement
- Scope (what's in, what's out)
- Technical specifications
- Design philosophy
- Architecture decisions
- Success criteria and roadmap

### ARCHITECTURE.md
The architecture guide explains:
- System context and ecosystem fit
- Package structure and directory layout
- Component patterns (wrapper, compound)
- Styling architecture
- Testing and performance considerations

### USAGE.md
The usage guide provides:
- Installation instructions
- Setup for Tailwind and base styles
- Import patterns and examples
- Component API documentation
- Customization options
- Troubleshooting tips

---

## Additional Resources

- **Main README**: [../README.md](../README.md)
- **Agent Instructions**: [../AGENT.md](../AGENT.md)
- **Changelog**: [../CHANGELOG.md](../CHANGELOG.md)
- **AgentUsage Guides**: [../AgentUsage/](../AgentUsage/)

---

*Last updated: 2025-12-02*
