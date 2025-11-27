# Snapshot of Solid CG members

In order to satisfy [Solid CG Charter election process](https://www.w3.org/community/solid/charter/#participation-and-voting-rights), we need a list of eligible voters. With [our tooling](https://github.com/VirginiaBalseiro/solid-ecosystem-monitor/), the first step would be making a snapshot of Solid CG members during the [announcement of the elections on 2025-11-05](https://lists.w3.org/Archives/Public/public-solid/2025Nov/0000.html).

This snapshot has been taken with a delay &mdash; on 2025-11-26 &mdash; in line with a [Solid CG decision (TODO link)]().

In this directory, you can find the output of [solid-ecosystem-monitor script](https://github.com/VirginiaBalseiro/solid-ecosystem-monitor/tree/main/node-w3capi) run 2025-11-26 approx. 15:00 UTC. In the next step, it can be used to generate the final eligible voters list.

Data source: public [W3C API](https://www.w3.org/api/).

## Usage

- [Collect designated voters](../affiliation-designated-voters.md) from affiliations, if different from default voters
- Copy files from this directory to `node-w3capi/data/`
- Proceed with [generating the list of eligible voters](https://github.com/VirginiaBalseiro/solid-ecosystem-monitor/tree/main/node-w3capi).
